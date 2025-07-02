---
title: kubectl
description: Some collection of kubernetes related commands
---

Docs: https://kubernetes.io/docs/reference/kubectl/

### Port-forward deployment
```
kubectl -n namespace port-forward deployment/mydeployment 8080:8080
```