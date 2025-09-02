
$(document).ready(function () {
  var sliderId = 'MultiImageSlider';
  var collectionListWrapperId = 'MultiImageCollectionWrapper';
  var slideClass = 'w-slide';
  var leftArrowClass = 'w-slider-arrow-left';
  var rightArrowClass = 'w-slider-arrow-right';
  var slideNavClass = 'w-slider-nav';
  var collectionItemClass = 'w-dyn-item';
  
  var $slider = $('#' + sliderId);
  var $slides = $slider.find('.' + slideClass);
  var $collectionWrapper = $('#' + collectionListWrapperId);
  var $items = $collectionWrapper.find('.' + collectionItemClass);

  if ($slider.length && $collectionWrapper.length) {
    $slider.css('opacity', 0);

    if (!$items.length) {
      $slider.remove();
    } else {
      var itemCount = $items.length;
      var slideCount = $slides.length;
      if (itemCount > slideCount) itemCount = slideCount;

      for (var i = 0; i < itemCount; i++) {
        const $item = $($items[i]);
        const $slide = $($slides[i]);

        if (!$slide || !$item) continue;

        // Récupération des données CMS
        const bgImage = window.getComputedStyle($item.find('.cms-image')[0])?.backgroundImage;
        const title = $item.find('.cms-title').html();
        const richText = $item.find('.cms-richtext').html();

        // Injection dans le slide
        if (bgImage && bgImage !== 'none') {
          $slide.css('background-image', bgImage);
        }

        $slide.find('.slide-title').html(title || '');
        $slide.find('.slide-richtext').html(richText || '');
      }

      // Supprimer les slides en trop
      for (var i = slideCount - 1; i >= itemCount; i--) {
        $($slides[i]).remove();
      }

      if (itemCount < 2) {
        $slider.find('.' + leftArrowClass + ', .' + rightArrowClass + ', .' + slideNavClass).remove();
      }

      $slider.css('opacity', 1);
    }

    $collectionWrapper.remove();
  }
});
