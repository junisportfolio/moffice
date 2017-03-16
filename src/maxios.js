import axios from 'axios';

class maxios {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.api,
      withCredentials: true
    });
  }

  help() {
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
      "%c해당 자동 호출되는 안내 메세지는 다음번 커밋때 제거됩니다. 해당 라이브러리에 대한 추후 버젼에 대한 정보는 여전히 [maxios.help();]로 확인 가능합니다.\n" +
      "%c이 메세지가 보인 화면에서는 웹브라우져를 통해 maxios 객체에 접근할 수 있습니다. 이 메세지가 라이브 환경에서 보여선 안됩니다.";
    console.log(message, "color: red", "background: red; color: white");
  }

  console(data) {
    console.log("%c" + data.status + "%c%s\n", "border-radius: 50px; color: white; background: green; padding: 5px; line-height: 30px; margin-right: 5px", "color: green", data.statusText, data.data)
  }

  error(errorObject) {
    let data = errorObject.response;
    console.log("%c" + data.status + "%c%s\n", "border-radius: 50px; color: white; background: red; padding: 5px; line-height: 30px; margin-right: 5px", "color: red", data.statusText, data.data)
  }

  get(url, query, success) {
    if(typeof success === "undefined") {
      if(typeof query === "function") {
        success = query;
        query = undefined;
      } else {
        success = this.console;
      }
    }

    let queries = (query) ? {params: query} : {};

    this.axios.get(url, queries).then(success).catch(this.error);
  }

  post(url, data, success) {
    this.axios.post(url, {
      data: data
    }).then(success).catch(this.error);
  }

  put(url, data, success) {
    this.axios.put(url, {
      data: data
    }).then(success).catch(this.error);
  }

  delete(url, success) {
    this.axios.delete(url).then(success).catch(this.error);
  }
}

export default new maxios();