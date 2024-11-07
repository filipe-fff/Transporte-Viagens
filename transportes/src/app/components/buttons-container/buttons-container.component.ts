import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrl: './buttons-container.component.scss'
})
export class ButtonsContainerComponent {
  @Input({ required: true }) isInEditModel!: boolean;
  @Input({ required: true }) isDirty!: boolean;
  @Output("onButtonCancel") onButtonCancelEmitt = new EventEmitter<void>();
  @Output("onButtonSave") onButtonSaveEmitt = new EventEmitter<void>();
  @Output("onButtonEdit") onButtonEditEmitt = new EventEmitter<void>();

  onButtonCancel() {
    this.onButtonCancelEmitt.emit();
  }

  onButtonSave() {
    this.onButtonSaveEmitt.emit();
  }

  onButtonEdit() {
    this.onButtonEditEmitt.emit();
  }
}