<template>
    <div class="videos">
      <div class="videos1">
        <video id="video1" style="width:100%;height: 100%; " autoplay="autoplay" loop="loop" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video2" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video3" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video4" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video5" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video6" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video7" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video8" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video9" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video10" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video11" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
      <div class="videos1">
        <video id="video12" style="width:100%;height: 100%; " autoplay="autoplay" controls="controls">
          测试
        </video>
      </div>
    </div>
</template>

<script>
    import Hls from 'hls.js'
  export default {
    data() {
      return {
        
      }
    },
   mounted(){
    this.handleClick1();
    this.handleClick2();
    this.handleClick3();
    this.handleClick4();
    this.handleClick5();
    this.handleClick6();
    this.handleClick7();
    this.handleClick8();
    this.handleClick9();
    this.handleClick10();
    this.handleClick11();
    this.handleClick12();

   },
    methods: {
      handleClick1() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video1');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/11/1/20230802T073129/a6cca290dd4e2c5e66dfb1a2f77684df.m3u8?proto=https');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick2() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video2');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/1/1/20230802T072335/283cf8b23e97b9b85e79f28c80e4fdf7.m3u8?proto=https');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick3() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video3');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/2/1/20230802T071108/687f6be410a8e0992a1e255687b8a0a3.m3u8?proto=https');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick4() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video4');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/7/1/20230802T073026/71536922784f68525f58ad5d18327ae6.m3u8?proto=https');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick5() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video5');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://open.ys7.com/v3/openlive/E38750291_3_2.m3u8?expire=1722067291&id=606879264100319232&t=0e315bb1e45612f592f6a5f822996d10ebb42fbe26814dbadd5e63613af1ed67&ev=100');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick6() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video6');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://open.ys7.com/v3/openlive/E38750291_1_2.m3u8?expire=1722148010&id=607217820899487744&t=740ad8ced73fd0730a91306723142e01678519f42b38a92f4c31c87876df26d7&ev=100');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick7() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video7');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://open.ys7.com/v3/openlive/E38750291_2_2.m3u8?expire=1722148732&id=607220849048555520&t=d0f99af977a7192d535f0799e2362c29481894d7ce7831f37066aac885c35673&ev=100');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick8() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video8');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://open.ys7.com/v3/openlive/E38750291_4_2.m3u8?expire=1722148793&id=607221107497373696&t=95c97d0ce3e4bdb7ca4d96cdf4e1ea94d08c242a567148f9d699535674131954&ev=100');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick9() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video9');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://open.ys7.com/v3/openlive/E38750291_3_2.m3u8?expire=1722067291&id=606879264100319232&t=0e315bb1e45612f592f6a5f822996d10ebb42fbe26814dbadd5e63613af1ed67&ev=100');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick10() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video10');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/11/1/20230802T073129/a6cca290dd4e2c5e66dfb1a2f77684df.m3u8?proto=https');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick11() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video11');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/2/1/20230802T071108/687f6be410a8e0992a1e255687b8a0a3.m3u8?proto=https');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
      handleClick12() {
        if (Hls.isSupported()) {
          // 获取 video 标签
          var video = document.getElementById('video12');
          // 实例化 Hls 对象
          var hls = new Hls();
          // 传入路径
          hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/7/1/20230802T073026/71536922784f68525f58ad5d18327ae6.m3u8?proto=https');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
              video.play(); // 调用播放 API
          });
      } else {
          alert("不支持HLS");
      }
      },
    }
  };
</script>

<style lang="less" scoped>
.videos{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction:row;
    background: rgba(0, 0, 0, 1);
    justify-content: center; 
}
.videos1{
    width: 450px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid black;
    // background: rgba(0, 0, 0, 0.5);
    // flex-direction:row;
    // // justify-content: space-between; 
}
</style>