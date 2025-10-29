export declare class RequestQueueManager {
    private static instance;
    private isProcessing;
    private queue;
    private constructor();
    static getInstance(): RequestQueueManager;
    enqueue<T>(task: () => Promise<T>): Promise<T>;
    private processQueue;
}
//# sourceMappingURL=workQueue.d.ts.map