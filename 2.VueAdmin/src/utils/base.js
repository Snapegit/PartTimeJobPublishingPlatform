const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootl2ff3m7e/",
            name: "springbootl2ff3m7e",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootl2ff3m7e/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "兼职发布平台"
        } 
    }
}
export default base
