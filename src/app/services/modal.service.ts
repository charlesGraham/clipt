import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false;

  constructor() { }

  public isModalVisible(): boolean {
    return this.visible;
  }

  public toggleModal(): void {
    this.visible = !this.visible;
  }
}