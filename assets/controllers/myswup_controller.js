// assets/controllers/myswup_controller.js

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        this.element.addEventListener('swup:pre-connect', this._onPreConnect);
        this.element.addEventListener('swup:connect', this._onConnect);
    }

    disconnect() {
        this.element.removeEventListener('swup:pre-connect', this._onPreConnect);
        this.element.removeEventListener('swup:connect', this._onConnect);
        document.removeEventListener('click', this._handleAnchorClick);
    }

    _onPreConnect(event) {
        console.log(event.detail.options);
    }

    _onConnect(event) {
        console.log(event.detail.swup);
        console.log(event.detail.options);

        document.addEventListener('click', this._handleAnchorClick);
    }

    _handleAnchorClick = (event) => {
        if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
            const id = event.target.getAttribute('href').slice(1);
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                event.preventDefault();
            }
        }
    };
}
