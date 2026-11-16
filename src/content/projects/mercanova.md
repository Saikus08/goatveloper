---
title: "MercaNova AI Assistant"
description: "University project: a conversational shopping assistant that recommends, compares, and adds products to the cart using tool calling and RAG, with prices and stock always read from the database."
started: 2026-10-01
status: "active"
tech: ["Python", "FastAPI", "PostgreSQL", "Ollama", "RAG", "React", "Vite", "Pytest", "Docker"]
featured: false
draft: false
---

## Problem

Shopping assistants built on LLMs are easy to demo and hard to trust. A model that invents a price, recommends something out of stock, or receives a customer's personal data is not a feature. It is a liability.

MercaNova is a team project for a software engineering course at ORT University. The goal was an assistant that answers real shopping questions, such as "headphones for video calls, under USD 200", using only real catalog data.

## Approach

- **Hexagonal FastAPI backend** that separates application logic (the agent loop, prompts, grounding) from adapters (LLM, embeddings, database)
- **Tool calling** for catalog search, product details, comparisons, and cart operations. Price and stock only ever come from tools that read the database
- **RAG over the product catalog** with local embeddings
- **Local LLMs through Ollama** (Llama 3.1 and Qwen 3), so the system runs without a paid API
- **Safe checkout:** confirming a purchase is never a tool the model can call, and no personal data reaches the LLM
- **React + Vite frontend** for the chat experience

## Making the Agent Reliable

Small local models break in predictable ways: they search in the wrong language, invent filters the user never asked for, recommend before clarifying, or leak internal tool names. Instead of hoping the prompt would fix it, I added guards to the agent loop and measured the result per use case, so every change could be judged with numbers instead of impressions.

## Engineering Practices

- Test-first development, with 600+ backend tests and CI on every pull request
- One issue per change, small reviewed PRs, and protected main
- Every non-obvious decision recorded as an ADR (problem, alternatives, decision, trade-offs), plus a diagram for each new flow

## What I Learned

- Grounding is an architecture problem, not a prompt problem
- Evaluating an LLM feature needs repeated runs and explicit success criteria
- Running models locally changes which trade-offs are worth making on latency, cost, and privacy
