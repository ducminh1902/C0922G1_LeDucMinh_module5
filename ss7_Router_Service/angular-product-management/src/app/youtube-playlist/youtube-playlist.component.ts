import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {
  playlist: Song[] = [];


  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }

}
