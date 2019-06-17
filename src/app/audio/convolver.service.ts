import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable()
export class ConvolverService {
  private irPath = 'assets/impulses';

  constructor(private http: HttpClient) {}

  loadIR(context: AudioContext, irFile: string): Observable<AudioBuffer> {
    const url = `${this.irPath}/${irFile}`;

    return this.http.get(url, {responseType: 'arraybuffer'})
    .pipe(
      flatMap(async (res) => {
        const buffer = await context.decodeAudioData(res);

        return buffer;
      })
    );
  }
}
