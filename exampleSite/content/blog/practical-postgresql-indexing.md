+++
draft = false
date = '2024-03-22'
title = 'Practical PostgreSQL Indexing'
type = 'blog'
description = 'A quick guide to choosing the right index type in PostgreSQL and understanding when indexes help versus hurt.'
tags = ['PostgreSQL', 'Backend', 'Database']
+++

Indexes can make or break your query performance. Here's a practical guide.

## B-tree (default)

Works for equality and range queries. This is what you get with `CREATE INDEX`:

```sql
CREATE INDEX idx_users_email ON users (email);
```

Good for: `WHERE email = 'x'`, `ORDER BY created_at`, range scans.

## GIN

Great for full-text search and JSONB containment:

```sql
CREATE INDEX idx_posts_tags ON posts USING GIN (tags);
```

Good for: `WHERE tags @> '["go"]'`, `to_tsvector() @@ to_tsquery()`.

## Partial indexes

Index only the rows you care about:

```sql
CREATE INDEX idx_active_users ON users (email)
WHERE active = true;
```

Smaller index, faster queries for the common case.

## When NOT to index

- Tables with fewer than 1,000 rows
- Columns with very low cardinality (e.g., boolean flags on large tables)
- Write-heavy tables where index maintenance cost outweighs read benefit

Always check `EXPLAIN ANALYZE` to verify your index is actually being used.
