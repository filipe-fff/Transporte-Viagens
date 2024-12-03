import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.scss'
})
export class ButtonsContainerComponent {
  @Input({ required: true }) isInEditModel!: boolean;
  @Input({ required: true }) isDirty!: boolean;
  @Output("onCancelButton") onCancelButtonEmitt = new EventEmitter<void>();
  @Output("onFindButton") onFindButtonEmitt = new EventEmitter<void>();
  @Output("onEditButton") onEditButtonEmitt = new EventEmitter<void>();

  onCancelButton() {
    this.onCancelButtonEmitt.emit();
  }

  onFindButton() {
    this.onFindButtonEmitt.emit();
  }

  onEditButton() {
    this.onEditButtonEmitt.emit();
  }
}