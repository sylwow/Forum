import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.scss']
})
export class MediaDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,) { }

  ngOnInit(): void {
    
  }

  finish() {
    this.dialogRef.close(null);
  }

  Add(url: string) {
    this.dialogRef.close(url);
  }
}
