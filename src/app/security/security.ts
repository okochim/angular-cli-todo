import {Component} from '@angular/core';
import {DomSanitizer,SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'todos',
  template: `
    <h4>A untrusted URL:</h4>
    <p><a class="e2e-dangerous-url" [href]="dangerousUrl">Click me</a></p>
    <h4>A trusted URL:</h4>
    <p><a class="e2e-trusted-url" [href]="trustedUrl">Click me</a></p>
    <h4>Resource URL:</h4>
    <p><label>Showing: <input (input)="updateVideoUrl($event.target.value)"></label></p>
    <p>Trusted:</p>
    <iframe class="e2e-iframe-trusted-src" width="640" height="200" [src]="videoUrl"></iframe>
    <p>Untrusted:</p>
    <iframe class="e2e-iframe-untrusted-src" width="640" height="200" [src]="dangerousVideoUrl"></iframe>
    `,
})

export class SecurityComponent {
    private dangerousUrl: string;
    private trustedUrl: SafeUrl;
    private dangerousVideoUrl: string;
    private videoUrl: SafeUrl;

    constructor(private sanitizer: DomSanitizer) {
        this.dangerousUrl = 'javascript:alert("Hi there")';
        this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
        this.dangerousVideoUrl = 'https://www.youtube.com/embed/1';
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    }

    updateVideoUrl(id: string) {
        this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    }
}