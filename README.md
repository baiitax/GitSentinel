# GitSentinel 🛡️

**An enterprise-grade, asynchronous serverless microservice that automatically audits GitHub Pull Requests for security flaws and performance bottlenecks using structured LLM orchestration.**

## The Problem
Development teams lose countless synchronous hours manually reviewing basic security flaws, hardcoded secrets, and structural inefficiencies. Standard static analyzers (like SonarQube) catch syntax errors but lack contextual understanding of complex business logic and race conditions.

## The Solution
GitSentinel acts as an asynchronous, zero-oversight senior reviewer. It hooks into GitHub `pull_request` webhooks, extracts code diffs, and utilizes OpenAI's models to perform deep contextual audits. 

Unlike standard "AI Wrappers," GitSentinel forces strict JSON-schema outputs to prevent parsing failures and integrates seamlessly into existing CI/CD pipelines without blocking the request/response cycle.

## Core Architecture & Execution

- **Zero-Blocking Ingestion:** Acknowledges GitHub webhooks within 40ms to prevent timeout closures, queueing the heavy LLM analysis asynchronously.
- **Structured AI Extraction:** Bypasses conversational AI fluff by forcing strict, deterministic JSON arrays (using Zod) mapping out vulnerabilities, line numbers, and remediation steps.
- **Event-Driven:** Purely decoupled architecture. Listens, analyzes, and dispatches findings directly back to the GitHub PR as formatted markdown.

## Tech Stack
- **Engine:** Node.js + Fastify (for ultra-low overhead routing)
- **Language:** TypeScript (Strict Mode enabled)
- **AI Orchestration:** OpenAI (`gpt-4o-mini` for token/latency optimization)
- **Validation:** Zod (for runtime type-safety and environment validation)
- **Integration:** Octokit (GitHub REST API)