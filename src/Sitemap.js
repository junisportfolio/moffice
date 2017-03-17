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
            icon: ""
          }, {
            id: "channel",
            name: "채널 관리",
            icon: ""
          }, {
            id: "board",
            name: "게시판 관리",
            icon: ""
          }, {
            id: "chatting",
            name: "채팅방 관리",
            icon: "fa-comments"
          }, {
            id: "filter",
            name: "필터링 단어 관리",
            icon: ""
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
            icon: ""
          }, {
            id: "broad_code",
            name: "방송 코드 관리",
            icon: ""
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
            icon: ""
          }, {
            id: "coin",
            name: "꿀 이력 관리",
            icon: ""
          }, {
            id: "exchange",
            name: "환전 관리",
            icon: ""
          }, {
            id: "product",
            name: "상품 관리",
            icon: ""
          }, {
            id: "cash",
            name: "결제 관리",
            icon: ""
          }
        ]
      }, {
        id: "customer",
        name: "고객지원 관리",
        icon: "fa-question"
      }
    ];
  }
}

export default new Sitemap();