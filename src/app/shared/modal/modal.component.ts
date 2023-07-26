import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {
  constructor(public modal: ModalService) { }

  ngOnInit(): void { }

  public closeModal = (): boolean => this.modal.toggleModal();

  public getModalVisibility = (): boolean => this.modal.isModalVisible();
}
