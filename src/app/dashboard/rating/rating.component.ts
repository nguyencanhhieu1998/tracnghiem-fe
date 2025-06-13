import { MatDialog } from '@angular/material/dialog';
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  rating: number;
  constructor(private authService: AuthService, public dialog: MatDialog,) {}

  ngOnInit(): void {}
  voteRating() {
    const userId = localStorage.getItem("UserID");
    const data = {
      title: "",
      content: "",
      userId: userId,
      rate: +this.rating,
    };
    console.log(data);
    this.authService.postRating(data).subscribe((res) => {
      localStorage.setItem("hasFeedback", "true");
      this.dialog.closeAll();
      Swal.fire({
        icon: "success",
        title:
          "FeedBack Thành Công. Đánh Giá của Bạn Đã Được Chúng Tôi Ghi Nhận",
        timer: 1500,
        position: "center",
        showConfirmButton: false,
      });
    });
  }
}
