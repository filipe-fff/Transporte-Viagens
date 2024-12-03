import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transport-infos-item',
  templateUrl: './transport-infos-item.component.html',
  styleUrl: './transport-infos-item.component.scss'
})
export class TransportInfosItemComponent {
  @Input({ required: true }) title: string |null = "";
  @Input({ required: true }) description: string | null = "";
}