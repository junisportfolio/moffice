import axios from 'axios';

class maxios {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.api,
      withCredentials: true
    });

    this.help();
  }

  help() {
    if(process.env.NODE_ENV === 'development') {
      window.maxios = this;

      const message = "Maxios\nCustom plugin, for Handling ajax calls, for Moffice application. It based on axios library.\n" +
        "\n" +
        "Getting started by typing [import maxios from '../maxios';] into your source.\n" +
        "GET 요청: maxios.get(url[, paramObject[, successCallback]]);\n" +
        "paramObject와 successCallback은 생략 가능합니다. paramObject는 {key0: value0, key1: value1} => '?key0=value0&key1=value1'로 전환됩니다.\n\n" +
        "POST 요청: maxios.post(url, dataObject, successCallback);\n" +
        "dataObject는 JSON 타입으로 전달해주세요.\n\n" +
        "PUT 요청: maxios.put(url, dataObject, successCallback);\n" +
        "dataObject는 JSON 타입으로 전달해주세요.\n\n" +
        "DELETE 요청: maxios.delete(url, successCallback);\n\n" +
        "모든 요청 메소드에 공통적으로 successCallback 인자를 통해 maxios.console 객체를 전달하면 기본 출력 메소드를 호출할 수 있습니다.\n" +
        "maxios 사용법을 알고 싶으시면 개발중인 소스에서 언제든지 maxios.help()를 호출해주세요.\n" +
        "%c이 메세지가 보인 화면에서는 웹브라우져를 통해 maxios 객체에 접근할 수 있습니다. 이 메세지가 라이브 환경에서 보여선 안됩니다.";
      console.log(message, "background: red; color: white");
    }
  }

  console(data) {
    console.log("%c" + data.status + "%c%s\n", "border-radius: 50px; color: white; background: green; padding: 5px; line-height: 30px; margin-right: 5px", "color: green", data.statusText, data.data)
  }

  error(errorObject) {
    let data = errorObject.response;
    if(data) {
      console.log("%c" + data.status + "%c%s\n", "border-radius: 50px; color: white; background: red; padding: 5px; line-height: 30px; margin-right: 5px", "color: red", data.statusText, data.data)
    } else {
      console.log(errorObject);
    }
  }

  get(object) {
    let url = object.url;
    let query = (object.query) ? {params: object.query} : {};
    let success = (object.success) ? object.success : this.console;
    let error = (object.error) ? object.error : this.error;

    this.axios.get(url, query).then(success).catch(error);
  }

  post(object) {
    let url = object.url;
    let data = (object.data) ? {data: object.data}: {};
    let success = (object.success) ? object.success : this.console;
    let error = (object.error) ? object.error : this.error;

    this.axios.post(url, data).then(success).catch(error);
  }

  put(object) {
    let url = object.url;
    let data = (object.data) ? {data: object.data}: {};
    let success = (object.success) ? object.success : this.console;
    let error = (object.error) ? object.error : this.error;

    this.axios.put(url, data).then(success).catch(error);
  }

  delete(object) {
    let url = object.url;
    let success = (object.success) ? object.success : this.console;
    let error = (object.error) ? object.error : this.error;

    this.axios.delete(url).then(success).catch(error);
  }
}

export default new maxios();