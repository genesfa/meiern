import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SetPlayerNameAction } from 'common/lib/Player';

@Component({
  selector: 'app-choose-name',
  templateUrl: './choose-name.component.html',
  styleUrls: ['./choose-name.component.scss'],
})
export class ChooseNameComponent {
  public usernameFormControl = new FormControl('');

  constructor(private readonly store: Store) {}

  public setUsername(): void {
    this.store.dispatch(
      new SetPlayerNameAction(this.usernameFormControl.value)
    );
  }
}