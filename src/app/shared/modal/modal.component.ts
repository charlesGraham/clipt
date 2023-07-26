import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {
  @Input() modalID = '';

  constructor(public modal: ModalService) { }

  ngOnInit(): void { }

  public closeModal = (): void => this.modal.toggleModal(this.modalID);

  public getModalVisibility = (): boolean => this.modal.isModalVisible(this.modalID);
}
