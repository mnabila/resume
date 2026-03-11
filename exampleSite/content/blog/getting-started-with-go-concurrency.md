+++
draft = false
date = '2024-09-12'
title = 'Getting Started with Go Concurrency'
type = 'blog'
description = 'A practical introduction to goroutines, channels, and common concurrency patterns in Go.'
tags = ['Go', 'Concurrency', 'Backend']
+++

Go makes concurrency accessible with goroutines and channels. Here's a quick look at the essentials.

## Goroutines

A goroutine is a lightweight thread managed by the Go runtime:

```go
go func() {
    fmt.Println("Hello from a goroutine")
}()
```

## Channels

Channels are the primary way goroutines communicate:

```go
ch := make(chan string)

go func() {
    ch <- "hello"
}()

msg := <-ch
fmt.Println(msg)
```

## Fan-out, Fan-in

A common pattern is to distribute work across multiple goroutines and collect results:

```go
func fanOut(jobs []int) <-chan int {
    results := make(chan int)
    var wg sync.WaitGroup

    for _, job := range jobs {
        wg.Add(1)
        go func(j int) {
            defer wg.Done()
            results <- process(j)
        }(job)
    }

    go func() {
        wg.Wait()
        close(results)
    }()

    return results
}
```

Understanding these primitives is the foundation for writing efficient Go services.
