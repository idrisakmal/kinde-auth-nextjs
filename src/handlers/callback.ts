import { config, routes } from "../config/index";
import RouterClient from "../routerClients/RouterClient";

export const callback = async (routerClient: RouterClient) => {
  // [KINDE-DEBUG] Log callback start
  console.log('[KINDE-DEBUG] Callback handler started', {
    url: routerClient.getUrl(),
    timestamp: new Date().toISOString(),
  });

  const errorParam = routerClient.getSearchParam("error");

  // [KINDE-DEBUG] Log search params
  const searchParams = {
    error: errorParam,
    code: routerClient.getSearchParam("code") ? 'present' : 'missing',
    state: routerClient.getSearchParam("state") ? 'present' : 'missing',
    scope: routerClient.getSearchParam("scope"),
  };
  console.log('[KINDE-DEBUG] Callback search params:', searchParams);

  if (errorParam) {
    console.log('[KINDE-DEBUG] Error parameter detected:', errorParam);
    if (errorParam?.toLowerCase() === "login_link_expired") {
      const reauthState = routerClient.getSearchParam("reauth_state");
      if (reauthState) {
        const decodedAuthState = atob(reauthState);
        try {
          const reauthState = JSON.parse(decodedAuthState);
          if (reauthState) {
            const urlParams = new URLSearchParams(reauthState);
            const loginRoute = new URL(
              `${config.redirectURL}${config.apiPath}/${routes.login}`,
            );
            loginRoute.search = urlParams.toString();
            return routerClient.redirect(loginRoute.toString());
          }
        } catch (ex) {
          throw new Error(
            ex instanceof Error
              ? ex.message
              : "Unknown Error parsing reauth state",
          );
        }
      }
      return;
    }
    return;
  }

  const postLoginRedirectURLFromMemory =
    (await routerClient.sessionManager.getSessionItem(
      "post_login_redirect_url",
    )) as string;

  if (postLoginRedirectURLFromMemory) {
    await routerClient.sessionManager.removeSessionItem(
      "post_login_redirect_url",
    );
  }

  const postLoginRedirectURL = postLoginRedirectURLFromMemory
    ? postLoginRedirectURLFromMemory
    : config.postLoginRedirectURL;

  // [KINDE-DEBUG] Log before handleRedirectToApp
  console.log('[KINDE-DEBUG] Before handleRedirectToApp', {
    postLoginRedirectURL,
    url: routerClient.getUrl(),
    hasSessionManager: !!routerClient.sessionManager,
    hasKindeClient: !!routerClient.kindeClient,
  });

  try {
    await routerClient.kindeClient.handleRedirectToApp(
      routerClient.sessionManager,
      routerClient.getUrl(),
    );
    console.log('[KINDE-DEBUG] handleRedirectToApp succeeded');
  } catch (error) {
    // [KINDE-DEBUG] Enhanced error logging
    console.error('[KINDE-DEBUG] handleRedirectToApp FAILED', {
      errorMessage: error instanceof Error ? error.message : String(error),
      errorName: error instanceof Error ? error.name : 'Unknown',
      errorStack: error instanceof Error ? error.stack : undefined,
      errorCause: error instanceof Error ? error.cause : undefined,
      errorStringified: JSON.stringify(error, Object.getOwnPropertyNames(error)),
      url: routerClient.getUrl(),
      timestamp: new Date().toISOString(),
    });

    if (config.isDebugMode) {
      console.error("callback", error);
    }

    if (error.message.includes("Expected: State not found")) {
      console.error('[KINDE-DEBUG] State not found error detected');
      return routerClient.json(
        {
          error:
            `Error: State not found.\nTo resolve this error please visit our docs https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#state-not-found-error` +
            error.message,
        },
        { status: 500 },
      );
    }

    // [KINDE-DEBUG] Return enhanced error response
    console.error('[KINDE-DEBUG] Returning 500 error to client:', error.message);
    return routerClient.json({
      error: error.message,
      // Add debug info in response for easier troubleshooting
      debug: {
        errorType: error instanceof Error ? error.name : 'Unknown',
        timestamp: new Date().toISOString(),
      }
    }, { status: 500 });
  }

  // Compile regex once at startup
  const compiledRegex = (() => {
    if (!config.postLoginAllowedURLRegex) {
      return null;
    }
    try {
      return new RegExp(config.postLoginAllowedURLRegex);
    } catch (error) {
      console.error("Invalid postLoginAllowedURLRegex pattern:", error);
      throw new Error(
        `Invalid postLoginAllowedURLRegex pattern: ${error.message}`,
      );
    }
  })();

  const isRedirectAllowed = (url: string) => {
    if (!config.postLoginAllowedURLRegex) {
      return true;
    }
    return compiledRegex!.test(url);
  };

  const state = (await routerClient.sessionManager.getSessionItem(
    "state",
  )) as string;
  console.log('[KINDE-DEBUG] Session state retrieved:', { hasState: !!state });
  await routerClient.sessionManager.removeSessionItem("state");

  if (postLoginRedirectURL && isRedirectAllowed(postLoginRedirectURL)) {
    const url = postLoginRedirectURL.startsWith("http")
      ? new URL(postLoginRedirectURL)
      : new URL(postLoginRedirectURL, routerClient.clientConfig.siteUrl);
    state && url.searchParams.set("state", state);
    console.log('[KINDE-DEBUG] Redirecting to postLoginRedirectURL:', url.toString());
    return routerClient.redirect(url.toString());
  }

  const url = new URL(routerClient.clientConfig.siteUrl);
  state && url.searchParams.set("state", state);
  console.log('[KINDE-DEBUG] Redirecting to siteUrl:', url.toString());
  return routerClient.redirect(url.toString());
};
