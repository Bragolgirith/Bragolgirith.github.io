var $pageflip = $('#pageflip');
$pageflip.pageflipInit( {
    PageWidth: 909,//698,
    PageHeight: 1276,//980,
    Margin: 32,
    MarginBottom: 64,
    PerformanceAware: false,
    AutoScale: true,
    FullScale: true,
    HardCover: true,
    HardPages: true,
    RightToLeft: false,
    VerticalMode: false,
    AlwaysOpened: false,
    AutoFlipEnabled: false,
    StartAutoFlip: false,
    AutoFlipLoop: -1,
    DropShadow: true,
    NoFlipShadow: false,
    Emboss: true,
    DropShadowOpacity: 0.2,
    FlipTopShadowOpacity: 0.2,
    FlipShadowOpacity: 0.2,
    HardFlipOpacity: 0.2,
    EmbossOpacity: 0.2,
    HashControl: true,
    PageCache: 5,
    MouseControl: true,
    HotKeys: false,
    ControlbarToFront: false,
    FullScreenEnabled: true,
    ShareLink: window.location.href,
    ShareText: '-',
    ShareVia: '@MaccPageFlip',
    ShareImageURL: 'pageflipdata/page0.jpg',
    DisableSelection: true,
    CenterSinglePage: true,
    SinglePageMode: false,
    ShowCopyright: false,
    Copyright: '©2019 bubi-jabi.wedding',
    Key: 'OMG2uZPRR94Y2Voc6f6X0d'
}, "card" );
var API = $pageflip.pageflip();
function p( n ) { API.gotoPageLabel( "t"+n, true ); }
function u( url ) { window.open( url ); }

// var $linkWebsite = $('#link-website');
// $linkWebsite.click(function() {
//     location.href='https://bubi-jabi.wedding';
// });