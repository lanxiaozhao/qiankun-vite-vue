## 用法

### Get 请求

```
import { http } from "@/utils/http";

// params传参
http.request('get', '/xxx', { params: param },config);

// url拼接传参
http.request('get', '/xxx?message=' + msg,{},config);
```

### Post 请求

```
import { http } from "@/utils/http";

// params传参
http.request('post', '/xxx', { params: param },config);

// data传参
http.request('post', '/xxx', { data: param },config);
```

### Download

```
import { http } from "@/utils/http";

// params传参
http.download('/xxx', { params: param },config);
```
