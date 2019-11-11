Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'home-o',
				text: "主页",
				url: '/pages/index/index'
			},
			{
				icon: 'search',
				text: "提意见",
				url: '/pages/advice/advice'
			}
		]
	},

	methods: {
		onChange(event) {
      var that = this;
      console.log("hello")
      // console.log(event.detail)
			this.setData({ active: event.detail });
      // wx.redirectTo({
      //   url: this.data.list[event.detail].url,
      // })
			wx.switchTab({
				url: this.data.list[this.data.active].url,
        success: function(){
          that.setData({ active: event.detail });
        },
        complete: function(){
          that.setData({ active: event.detail });
        }
			});
		},

		// init() {
    //   console.log("hi")
		//   const page = getCurrentPages().pop();
		// 	this.setData({
		// 		active: this.data.list.findIndex(item => item.url === `/${page.route}`)
		// 	});
		// }
	}
});
