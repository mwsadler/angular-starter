export interface DayPerformanceModel {
    dayPerformance: number,
    stocksPerformance: StocksPerformance[]
}

export interface StocksPerformance {
    account: string,
    symbol: string,
    dayPerformance: number
    overallPerformance: number,
    percentDayPerformance: number,
    percentOverallPerformance: number,
    totalValue: number
}
