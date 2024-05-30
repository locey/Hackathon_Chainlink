package main

import (
	"backend/app/global/variable"
	_ "backend/bootstrap"
	"backend/routers"
)

// 这里可以存放门户类网站入口
func main() {
	router := routers.InitApiRouter()
	_ = router.Run(variable.ConfigYml.GetString("HttpServer.Api.Port"))
}
