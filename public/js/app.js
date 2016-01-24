var app = angular.module('app', [])

app.controller('MainController', function($scope) {
  var tile1 = {
    image_url: './images/face-tile_0001_1.png'
  }
  var tile2 = {
    image_url: 'http://www.daz3d.com/media/catalog/product/cache/1/thumbnail/689303033aebc8cae535000c73c8db4b/l/u/lunar-craters-moonscape-2.jpg'
  }
  var tile3 = {
    image_url: 'https://c2.staticflickr.com/8/7011/6398822869_4cde35711e_b.jpg'
  }
  var tile4 = {
    image_url: 'http://rs1228.pbsrc.com/albums/ee443/storylockup1/RLC/textures/6964131-close-up-of-wolf-fur_zpsf97dcf6f.jpg~c200'
  }
  var tile5 = {
    image_url: 'http://fullyfeline.com/wp-content/uploads/2015/07/Cat-nose-close-up-small-200x200.jpg'
  }
  var tile6 = {
    image_url: 'http://rs19.pbsrc.com/albums/b172/nekoaitsu/Earthbound%20Pics/CIMG1678.jpg~c200'
  }
  var tile7 = {
    image_url: 'http://rs11.pbsrc.com/albums/a183/marleenbryan/moon%20geology/800px-Tycho_Crater.jpg~c200'
  }
  var tile8 = {
    image_url: 'http://new.56060.in/CMS/Previews/ANIM/big/ANI815525.gif'
  }
  var tile9 = {
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/PIA17211-SaturnMoon-Enceladus-CloseFlyby-20151219.jpg/200px-PIA17211-SaturnMoon-Enceladus-CloseFlyby-20151219.jpg'
  }
  $scope.rows = [
    [
      {
        image_url: './images/face-tile_0001_1.png'
      },
      {
        image_url: './images/face-tile_0002_2.png'
      },
      {
        image_url: './images/face-tile_0003_3.png'
      }
    ],
    [
      {
        image_url: './images/face-tile_0004_4.png'
      },
      {
        image_url: './images/face-tile_0005_5.png'
      },
      {
        image_url: './images/face-tile_0006_6.png'
      }
    ],
    [
      {
        image_url: './images/face-tile_0007_7.png'
      },
      {
        image_url: './images/face-tile_0008_8.png'
      },
      {
        image_url: './images/face-tile_0009_9.png'
      }
    ]
  ]

})
