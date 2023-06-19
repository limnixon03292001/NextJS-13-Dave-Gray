import { RateLimiter } from "limiter"

//to limit routes request
export const limiter = new RateLimiter({
    tokensPerInterval: 3,
    interval: "minute",
    fireImmediately: true,
})