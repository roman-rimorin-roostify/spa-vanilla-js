import AbstractView from './AbstractView.js';
import { getVideo, getVideos } from '../services/yt-api.js';
import { u } from '../lib.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Home');
  }

  async getHtml() {
    const { items } = await getVideos();
    // console.log(items)
    // let video = await getVideo();
    // console.log(video)
    return `
        <h1>Home</h1>
        <p>
            Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
        </p>
        <p>
            <a href="${u('/posts')}" data-link>View recent posts</a>.
        </p>

        <ul class="video-list">
          ${items.map(item => `<li><img src='${item.snippet.thumbnails.medium.url}'/></li>`).join("")}
        <ul>

        <br>
        <br>
    `;
  }
}
