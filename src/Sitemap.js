import {
  Member, Channel, Board, Chatting, Filter,
	BroadTool, BroadCode,
  Cash, Coin, Exchange, Product, Promotion,
  Customer
} from './containers';

class Sitemap {
  constructor() {
    this.structure = [
      {
        id: "community",
        path: "/community",
        name: "커뮤니티 관리",
        icon: "fa-users",
        children: [
          {
            id: "member",
            path: "/community/member",
            name: "회원 관리",
            icon: "",
            content: Member
          }, {
            id: "channel",
            path: "/community/channel",
            name: "채널 관리",
            icon: "",
            content: Channel
          }, {
            id: "board",
            path: "/community/board",
            name: "게시판 관리",
            icon: "",
            content: Board
          }, {
            id: "chatting",
            path: "/community/chatting",
            name: "채팅방 관리",
            icon: "fa-comments",
            content: Chatting
          }, {
            id: "filter",
            path: "/community/filter",
            name: "필터링 단어 관리",
            icon: "",
            content: Filter
          }
        ]
      }, {
        id: "broadcast",
        path: "/broadcast",
        name: "방송국 관리",
        icon: "fa-wifi",
        children: [
          {
            id: "broad_tool",
            path: "/broadcast/broadtool",
            name: "방송 관리",
            icon: "",
            content: BroadTool
          }, {
            id: "broad_code",
            path: "/broadcast/broadcode",
            name: "방송 코드 관리",
            icon: "",
            content: BroadCode
          }
        ]
      }, {
        id: "business",
        path: "/business",
        name: "비즈니스 관리",
        icon: "fa-krw",
        children: [
          {
            id: "promotion",
            path: "/business/promotion",
            name: "프로모션 관리",
            icon: "",
            content: Promotion
          }, {
            id: "coin",
            path: "/business/coin",
            name: "꿀 이력 관리",
            icon: "",
            content: Coin
          }, {
            id: "exchange",
            path: "/business/exchange",
            name: "환전 관리",
            icon: "",
            content: Exchange
          }, {
            id: "product",
            path: "/business/product",
            name: "상품 관리",
            icon: "",
            content: Product
          }, {
            id: "cash",
            path: "/business/cash",
            name: "결제 관리",
            icon: "",
            content: Cash
          }
        ]
      }, {
        id: "customer",
        path: "/customer",
        name: "고객지원 관리",
        icon: "fa-question",
        content: Customer
      }
    ];
  }
}

export default new Sitemap();