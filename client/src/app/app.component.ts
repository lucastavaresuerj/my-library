import { Component } from '@angular/core';
import { config } from 'aws-sdk';
// https://docs.aws.amazon.com/pt_br/sdk-for-javascript/v2/developer-guide/global-config-object.html

// config.update({ credentials: { accessKeyId } });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
}
