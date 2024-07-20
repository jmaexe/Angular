import { catchError, Observable, take } from "rxjs";

export class Perform<T> {
    data: T | undefined;
    isLoading: boolean = false;
    private action$ : Observable<T> | undefined;

    load(action$: Observable<T>) : void {
        this.isLoading = true;
        this.action$ = action$;

        this.action$
        .subscribe((data: T) => {
            this.data = data;
            this.isLoading = false;
        })
    }
  }