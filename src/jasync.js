import $ from 'jquery';

class jasync {
  constructor() {
    this.api = process.env.api;
    this.sync = {
      get: obj => this.sget(obj),
      post: obj => this.spost(obj),
      put: obj => this.sput(obj),
      delete: obj => this.sdelete(obj)
    }

    this.help();
  }

  help() {
    if(process.env.NODE_ENV === 'development') {
      window.jasync = this;

      const message = "jQuery Ajax\nCustom plugin, for Handling ajax calls, for Moffice application. It based on jquery library.\n" +
        "\n" +
        "Getting started by typing [import maxios from '../jasync';] into your source.\n" +
        "GET 요청: jasync.get(obj);\n" +
        "POST 요청: jasync.post(obj);\n" +
        "PUT 요청: jasync.put(obj);\n" +
        "DELETE 요청: jasync.delete(obj);\n" +
        "모든 요청은 기본적으로 비동기식(async: true)요청이며, 비동기식 요청이 필요한 경우\n" +
        "jasync.sync.get(obj);와 같이, jasync객체 하위의 sync 멤버로부터 메소드를 호출해 사용하면 됩니다.\n" +
        "인자로 넘겨주는 obj에 대하여\n" +
        "Object {\n" +
        "  url: \"/private/v1/auth\", // 필수입니다. (없으면 에러)\n" +
        "  query: \"a=12345&b=23456\", // GET방식 요청에 필요합니다. (?는 제외)\n" +
        "  data: formData, // POST방식과 PUT방식 요청에 필요합니다.\n" +
        "  success: callbackMethod, // 모든 요청에 대해 200 status의 callback method를 지정해줍니다. (기본값은 responseData 콘솔 출력)\n" +
        "  error: callbackMethod // 모든 요청에 대해 모든 에러 요청의 callback method를 지정해줍니다. (기본값은 errorData 콘솔 출력)\n" +
        "}\n" +
        "%c이 메세지가 보인 화면에서는 웹브라우져를 통해 jasync 객체에 접근할 수 있습니다. 이 메세지가 라이브 환경에서 보여선 안됩니다.";
      console.log(message, "background: red; color: white");
    }
  }

  console(data) {
    console.log(data);
  }

  error(errorObject) {
    console.log("%c" + errorObject.status + "%c%s\n", "border-radius: 50px; color: white; background: red; padding: 5px; line-height: 30px; margin-right: 5px", "color: red", errorObject.statusText, errorObject.responseJSON || errorObject.responseText);
  }

  get(obj) {
    if(!obj || !obj.url) throw new Error("params.url 값은 필수입니다.");
    let that = this;

    $.ajax({
      method: "GET",
      url: that.api + obj.url + (obj.query ? "?" + obj.query : ""),
      cache: false,
      async: obj.async,
      xhrFields: {
        withCredentials: true
      },
      success: obj.success || that.console,
      error: obj.error || that.error
    });
  }

  post(obj) {
    if(!obj || !obj.url) throw new Error("params.url 값은 필수입니다.");
    let that = this;

    $.ajax({
      method: "POST",
      url: that.api + obj.url,
      data: obj.data,
      cache: false,
      async: obj.async,
      xhrFields: {
        withCredentials: true
      },
      success: obj.success || that.console,
      error: obj.error || that.error
    });
  }

  put(obj) {
    if(!obj || !obj.url) throw new Error("params.url 값은 필수입니다.");
    let that = this;

    $.ajax({
      method: "PUT",
      url: that.api + obj.url,
      data: obj.data,
      cache: false,
      async: obj.async,
      xhrFields: {
        withCredentials: true
      },
      success: obj.success || that.console,
      error: obj.error || that.error
    });
  }

  delete(obj) {
    if(!obj || !obj.url) throw new Error("params.url 값은 필수입니다.");
    let that = this;

    $.ajax({
      method: "DELETE",
      url: that.api + obj.url,
      cache: false,
      async: obj.async,
      xhrFields: {
        withCredentials: true
      },
      success: obj.success || that.console,
      error: obj.error || that.error
    });
  }

  sget(obj) {
    obj.async = false;

    this.get(obj);
  }

  spost(obj) {
    obj.async = false;

    this.post(obj);
  }

  sput(obj) {
    obj.async = false;

    this.put(obj);
  }

  sdelete(obj) {
    obj.async = false;

    this.delete(obj);
  }
}

export default new jasync();