# nodejs-cpu-cache

Examples showing the impact of cache misses in an interpreted language

```console
$ time node cache-friendly.js
node cache-friendly.js  0.59s user 0.16s system 101% cpu 0.738 total
$ time node cache-unfriendly.js
node cache-unfriendly.js  1.04s user 0.13s system 101% cpu 1.145 total
```

```sh
perf stat -B -e cache-references,cache-misses,cycles,instructions,branches,fault -- node --interpreted-frames-native-stack --perf-basic-prof cache-unfriendly.js
```
