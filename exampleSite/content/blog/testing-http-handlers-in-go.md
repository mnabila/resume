+++
draft = false
date = '2023-06-18'
title = 'Testing HTTP Handlers in Go'
type = 'blog'
description = 'Patterns for writing clean, reliable tests for Go HTTP handlers using httptest and table-driven tests.'
tags = ['Go', 'Testing', 'Backend']
+++

Go's `net/http/httptest` package makes testing HTTP handlers straightforward.

## Basic handler test

```go
func TestHealthCheck(t *testing.T) {
    req := httptest.NewRequest("GET", "/health", nil)
    w := httptest.NewRecorder()

    HealthCheckHandler(w, req)

    if w.Code != http.StatusOK {
        t.Errorf("expected 200, got %d", w.Code)
    }
}
```

## Table-driven tests

```go
func TestGetUser(t *testing.T) {
    tests := []struct {
        name       string
        userID     string
        wantStatus int
    }{
        {"valid user", "123", http.StatusOK},
        {"missing user", "999", http.StatusNotFound},
        {"invalid id", "abc", http.StatusBadRequest},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            req := httptest.NewRequest("GET", "/users/"+tt.userID, nil)
            w := httptest.NewRecorder()

            handler.ServeHTTP(w, req)

            if w.Code != tt.wantStatus {
                t.Errorf("got %d, want %d", w.Code, tt.wantStatus)
            }
        })
    }
}
```

## Testing with dependencies

Inject dependencies through the handler's struct:

```go
type UserHandler struct {
    Store UserStore
}

// In tests, pass a mock:
h := &UserHandler{Store: &mockStore{}}
```

Keep your handlers thin and your tests will stay simple.
