import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

@Component({
  selector: "app-find-cameraman",
  templateUrl: "./find-cameraman.component.html",
  styleUrls: ["./find-cameraman.component.css"]
})
export class FindCameramanComponent implements OnInit {
  data;
  constructor(private afs: AngularFirestore) {
    this.afs
      .collection("items")
      .valueChanges()
      .subscribe(vals => {
        this.data = vals;
        vals.map(val => {
          console.log("val => ", val["number"]);
        });
      });
  }

  ngOnInit() {}
}
