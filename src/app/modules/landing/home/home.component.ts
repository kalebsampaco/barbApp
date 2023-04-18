import { Component, ViewEncapsulation, ChangeDetectorRef, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { FuseCardComponent } from '@fuse/components/card';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    @ViewChildren(FuseCardComponent, {read: ElementRef}) private _fuseCards: QueryList<ElementRef>;

    filters: string[] = ['all', 'Ellos', 'Ellas', 'kids'];
    numberOfCards: any = {};
    selectedFilter: string = 'all';

    Data = [
        {
            tipo: 'Ellos',
            name: 'Barbería 1',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central ellos',
        },
        {
            tipo: 'Ellas',
            name: 'Barbería 2',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central ellas',
        },
        {
            tipo: 'Ellos',
            name: 'Barbería 3',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central ellos',
        },
        {
            tipo: 'Ellas',
            name: 'Barbería 4',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central ellas',
        },
        {
            tipo: 'kids',
            name: 'Barbería 5',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central kids',
        },
        {
            tipo: 'kids',
            name: 'Barbería 6',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central kids',
        },
        {
            tipo: 'Ellos',
            name: 'Barbería 7',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central ellos',
        },
        {
            tipo: 'Ellas',
            name: 'Barbería 8',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central ellas',
        },
        {
            tipo: 'Ellos',
            name: 'Barbería 9',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central ellos',
        },
        {
            tipo: 'Ellas',
            name: 'Barbería 10',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central ellas',
        },
        {
            tipo: 'kids',
            name: 'Barbería 11',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central kids',
        },
        {
            tipo: 'kids',
            name: 'Barbería 12',
            calificacion: 4.5,
            reviews: 40,
            description: 'Peluquería y barbería central kids',
        }

    ]
    /**
     * Constructor
     */
    constructor(
        changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    )
    {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Calculate the number of cards
        this._calcNumberOfCards();

        // Filter the cards for the first time
        this._filterCards();
    }

    /**
     * On filter change
     *
     * @param change
     */
    onFilterChange(change: MatButtonToggleChange): void
    {
        // Set the filter
        this.selectedFilter = change.value;

        // Filter the cards
        this._filterCards();
    }

    private _calcNumberOfCards(): void
    {
        // Prepare the numberOfCards object
        this.numberOfCards = {};

        // Prepare the count
        let count = 0;

        // Go through the filters
        this.filters.forEach((filter) => {

            // For each filter, calculate the card count
            if ( filter === 'all' )
            {
                count = this._fuseCards.length;
            }
            else
            {
                count = this.numberOfCards[filter] = this._fuseCards.filter(fuseCard => fuseCard.nativeElement.classList.contains('filter-' + filter)).length;
            }

            // Fill the numberOfCards object with the counts
            this.numberOfCards[filter] = count;
        });
    }

    /**
     * Filter the cards based on the selected filter
     *
     * @private
     */
    private _filterCards(): void
    {
        // Go through all fuse-cards
        this._fuseCards.forEach((fuseCard) => {

            // If the 'all' filter is selected...
            if ( this.selectedFilter === 'all' )
            {
                // Remove hidden class from all cards
                fuseCard.nativeElement.classList.remove('hidden');
            }
            // Otherwise...
            else
            {
                // If the card has the class name that matches the selected filter...
                if ( fuseCard.nativeElement.classList.contains('filter-' + this.selectedFilter) )
                {
                    // Remove the hidden class
                    fuseCard.nativeElement.classList.remove('hidden');
                }
                // Otherwise
                else
                {
                    // Add the hidden class
                    fuseCard.nativeElement.classList.add('hidden');
                }
            }
        });
    }

    crearReporte(){

    }

    exportToExcel(){

    }
}
