import React from 'react'
import './MyBooks.scss'

export default function MyBooks() {
  return (
    <div class="grid-shuffle">
    <ul id="grid" class="row">

      <li class="book-item small-12 medium-6 columns" data-groups='["classic"]' data-date-created='1937' data-title='Of Mice and Men' data-color='#fcc278'>
        <div class="bk-img">
          <div class="bk-wrapper">
            <div class="bk-book bk-bookdefault">
              <div class="bk-front">
                <div class="bk-cover" style={{backgroundImage: "url('http://interactivejoe.com/book-viewer/assets/images/bk_1-small.jpg')"}}></div>
              </div>
              <div class="bk-back"></div>
              <div class="bk-left"></div>
            </div>
          </div>
        </div>
        <div class="item-details">
          <h3 class="book-item_title">Of Mice and Men</h3>
          <p class="author">by John Steinbeck &bull; 1937</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus nisi, eget pulvinar in, molestie et arcu.</p>
          <a href="#" class="button ">Details</a>
        </div>

        <div class="overlay-details">
          <a href="#" class="close-overlay-btn">Close</a>
          <div class="overlay-image">
            <img src="http://interactivejoe.com/book-viewer/assets/images/bk_1-large.jpg" alt="Book Cover" />
            <div class="back-color"></div>
          </div>
          <div class="overlay-desc activated">
            <h2 class="overlay_title">Of Mice and Men</h2>
            <p class="author">by John Steinbeck</p>
            <p class="published">1937</p>
            <p class="synopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus convallis sem. Nunc sed tristique augue. Aenean at nulla vel lacus volutpat bibendum vitae ut nibh. Aliquam eu metus et purus rutrum malesuada. Aenean in auctor mauris,
              non vulputate libero. Nullam auctor, purus ut cursus convallis, lectus tellus dignissim lectus, id tempor ipsum leo ut nulla. Vestibulum vitae elit erat.</p>
            <a href="#" class="button preview">Preview</a>
          </div>
          <div class="overlay-preview">
            <a href="#" class="back-preview-btn">Back</a>
            <h4 class="preview-title">Preview</h4>
            <div class="preview-content">
              <h5>Chapter 1</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus convallis sem. Nunc sed tristique augue. Aenean at nulla vel lacus volutpat bibendum vitae ut nibh. Aliquam eu metus et purus rutrum malesuada. Aenean in auctor
                mauris, non vulputate libero. Nullam auctor, purus ut cursus convallis, lectus tellus dignissim lectus, id tempor ipsum leo ut nulla. Vestibulum vitae elit erat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus convallis sem. Nunc sed tristique augue. Aenean at nulla vel lacus volutpat bibendum vitae ut nibh. Aliquam eu metus et purus rutrum malesuada. Aenean in auctor
                mauris, non vulputate libero. Nullam auctor, purus ut cursus convallis, lectus tellus dignissim lectus, id tempor ipsum leo ut nulla. Vestibulum vitae elit erat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus convallis sem. Nunc sed tristique augue. Aenean at nulla vel lacus volutpat bibendum vitae ut nibh. Aliquam eu metus et purus rutrum malesuada. Aenean in auctor
                mauris, non vulputate libero. Nullam auctor, purus ut cursus convallis, lectus tellus dignissim lectus, id tempor ipsum leo ut nulla. Vestibulum vitae elit erat.<br>&nbsp;</br>&nbsp;</p>
            </div>
          </div>
        </div>
      </li>

    </ul>
  </div>
  )
}
