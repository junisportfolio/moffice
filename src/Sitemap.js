import {
  Home,
  Login,
  Member, Channel, Board, Chatting, Filter,
  Board_tool, Board_code,
  Cash, Coin, Exchange, Product, Promotion,
  Customer,
  NoMatch
} from './containers';

class Sitemap {
  constructor() {
    console.log("%cSitemap constructor has called.", "color: red; font-size: 30px");

    this.structure = [
      {
        id: "community",
        name: "커뮤니티 관리",
        icon: "fa-users",
        children: [
          {
            id: "member",
            name: "회원 관리",
            icon: "",
            content: Member
          }, {
            id: "channel",
            name: "채널 관리",
            icon: "",
            content: Channel
          }, {
            id: "board",
            name: "게시판 관리",
            icon: "",
            content: Board
          }, {
            id: "chatting",
            name: "채팅방 관리",
            icon: "fa-comments",
            content: Chatting
          }, {
            id: "filter",
            name: "필터링 단어 관리",
            icon: "",
            content: Filter
          }
        ]
      }, {
        id: "broadcast",
        name: "방송국 관리",
        icon: "fa-wifi",
        children: [
          {
            id: "broad_tool",
            name: "방송 관리",
            icon: "",
            content: Board_tool
          }, {
            id: "broad_code",
            name: "방송 코드 관리",
            icon: "",
            content: Board_code
          }
        ]
      }, {
        id: "business",
        name: "비즈니스 관리",
        icon: "fa-krw",
        children: [
          {
            id: "promotion",
            name: "프로모션 관리",
            icon: "",
            content: Promotion
          }, {
            id: "coin",
            name: "꿀 이력 관리",
            icon: "",
            content: Coin
          }, {
            id: "exchange",
            name: "환전 관리",
            icon: "",
            content: Exchange
          }, {
            id: "product",
            name: "상품 관리",
            icon: "",
            content: Product
          }, {
            id: "cash",
            name: "결제 관리",
            icon: "",
            content: Cash
          }
        ]
      }, {
        id: "customer",
        name: "고객지원 관리",
        icon: "fa-question",
        content: Customer
      }
    ];
  }
}

export default new Sitemap();