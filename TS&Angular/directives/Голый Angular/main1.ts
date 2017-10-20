module YourApp.Common.Directives {
    
        class SearchInputController {
            public query: string;
    
            constructor(private $location: ng.ILocationService) {
            }
    
            doSearch(): void {
                this.$location.url(`/search?q=${this.query}`);
                this.query = '';
            }
        }
    
        export function SearchInputDirective($location: ng.ILocationService): ng.IDirective {
            return {
                restrict: 'E',
                templateUrl: 'common/directives/searchInput/SearchInputDirective.html',
                replace: true,
                scope: true,
                controllerAs: 'SearchInputController',
                bindToController: {
                    'query': '@'
                },
                controller: (): any => new SearchInputController($location)
            };
        }
    
        SearchInputDirective.$inject = ['$location'];
    }