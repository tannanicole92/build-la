$(document).ready(() => {
    $('#tileViewBtn').click(() => {
      $('#tileView').attr('style','display:flex !important;');
      $('#listView').attr('style','display:none !important;');
      $('#tileViewBtn').attr('style','background-color:#0F2940;color: #ffffff;');
      $('#listViewBtn').attr('style','color:#0F2940;background-color: #ffffff;');
      $('#tileViewSvg').attr('style','fill: #ffffff;');
      $('#listViewSvg').attr('style','fill:#0F2940;');
      return false;
    });

    $('#listViewBtn').click(() => {
      $('#listView').attr('style','display:flex !important;');
      $('#tileView').attr('style','display:none !important;');
      $('#listViewBtn').attr('style','background-color:#0F2940;color: #ffffff;');
      $('#tileViewBtn').attr('style','color:#0F2940;background-color: #ffffff;');
      $('#listViewSvg').attr('style','fill: #ffffff;');
      $('#tileViewSvg').attr('style','fill:#0F2940;');
      return false;
    });
    $( window ).resize(() => {
      if( $( window ).width() > 480) {
        $('.right-sidebar').attr('style','display:block;');
      } else {
        $('.right-sidebar').attr('style','display:none;');
      }
    });
});
