import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  // 2 seconds duration
  public display(msg: string, cssClass: string = 'megna',
    hPosition: MatSnackBarHorizontalPosition = 'center', vPosition: MatSnackBarVerticalPosition = 'top',
    action: string = null, duration: number = 2000): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['label-light-' + cssClass];
    config.duration = duration;
    config.verticalPosition = vPosition;
    config.horizontalPosition = hPosition;
    this.snackBar.open(msg, action, config);
  }
}
