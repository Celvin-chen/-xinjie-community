<template>
      <div class="videos">
        <div class="videos1">
          <video id="video" style="width:100%;height: 100%; " autoplay="autoplay">
            测试
          </video>
          <video id="video1" style="width:100%;height: 100%; " autoplay="autoplay">
           测试
          </video>
        </div>
        <div class="videos1">
          <video id="video2" style="width:100%;height: 100%; " autoplay="autoplay">
            测试
          </video>
          <video id="video3" style="width:100%;height: 100%; " autoplay="autoplay">
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
      this.handleClick();
      this.handleClick1();
      this.handleClick2();
      this.handleClick3();

     },
      methods: {
        handleClick() {
          if (Hls.isSupported()) {
            // 获取 video 标签
            var video = document.getElementById('video');
            // 实例化 Hls 对象
            var hls = new Hls();
            // 传入路径
            hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/12/1/20230802T073150/a15fc338842f6a355c41ab3d03c236e7.m3u8?proto=https');
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play(); // 调用播放 API
            });
        } else {
            alert("不支持HLS");
        }
        },
        handleClick1() {
          if (Hls.isSupported()) {
            // 获取 video 标签
            var video = document.getElementById('video2');
            // 实例化 Hls 对象
            var hls = new Hls();
            // 传入路径
            hls.loadSource('https://cmgw-vpc.lechange.com:8890/LCO/7K08F8APAZEE331/0/1/20230802T072415/35f77d04152ffbc459fce9e3bcd9c15d.m3u8?proto=https');
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
            var video = document.getElementById('video3');
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
            var video = document.getElementById('video1');
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
      }
    };
  </script>
  
  <style lang="less" scoped>
  .videos{
      height: 100px;
      width: 100%;
      display: flex;
      // align-items: center;
      flex-wrap: wrap;
      flex-direction:row;
      justify-content: space-between; 
  }
  .videos1{
      height: 100px;
      width: 100%;
      display: flex;
      // align-items: center;
      // flex-wrap: wrap;
      flex-direction:row;
      justify-content: space-between; 
  }
  </style>