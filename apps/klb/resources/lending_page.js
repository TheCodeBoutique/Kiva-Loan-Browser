// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('views/loan_listing');
sc_require('views/filter_item');
sc_require('views/scroll');
sc_require('controllers/loans');
sc_require('controllers/lending');

Klb.lendingPage = SC.Page.design({

 mainView: SC.View.design({
	layout: {top:0,bottom:0,left:0,right:0},
  childViews: 'sidebarView resultsView'.w(),

  defaultResponder: Klb,
      
  bottombarView: SC.View.design({
    layout: { bottom: 0, left: 0, right: 0, height: 40 },
    classNames: 'klb-chrome'.w(),
    childViews: 'checkoutButton'.w(),
    
    checkoutButton: SC.ButtonView.design({
      layout: { right: 10, top: 10, width: 80, height: 24 },
      title: "_Checkout".loc(),
      action: "checkout",
      isEnabledBinding: "Klb.loansController.canCheckout"
    })	    
  }),
  
  sidebarView: SC.SplitView.design({
    layout: { top: 0, left: 0, bottom: 0, width: 300 },
    backgroundColor: '#DDDDDD',
    layoutDirection: SC.LAYOUT_VERTICAL,
    defaultThickness: 230, // for bottom right view
    autoresizeBehavior: SC.RESIZE_TOP_LEFT,
    canCollapseViews: YES,
    classNames: 'lendingSidebar',

    topLeftMinThickness: 200,
    topLeftMaxThickness: 800,
   
    topLeftView: SC.ScrollView.design({
     	isVisible: NO,
      hasHorizontalScroller: NO, // disable horizontal scrolling
      classNames: 'no-border',
      contentView: SC.SourceListView.design({
        contentBinding: 'Klb.filtersController.arrangedObjects',
        selectionBinding: 'Klb.filtersController.selection',
        contentValueKey: 'title',
        actOnSelect: YES,
        action: 'selectSidebarItem',
        target: 'Klb.searchController',
        selectionDelegate: Klb.filtersController,
        // hasContentIcon: NO,
        // contentIconKey:  "targetIcon",        
        // action: 'selectTarget',
        exampleView: Klb.FilterItemView
      })
    }),
    
    dividerView: SC.SplitDividerView,
    
    bottomRightView: SC.View.design({
      childViews: 'filterTitle searchField genderLabel femaleCheckbox groupCheckbox locationLabel locationContent locationButton sectorLabel sectorContent sectorButton'.w(),

      filterTitle: SC.LabelView.design({
			  layout: { left: 5, top: 5, right: 5, height: 32 },
			  value: "_Filter Options".loc(),
			  controlSize: SC.LARGE_CONTROL_SIZE,
			  classNames: 'filter-header'
			}),
			searchField: SC.TextFieldView.design({
			  layout: { left: 10, top: 37, right: 10, height: 22 },
			  hint: "_Search".loc(),
			  valueBinding: 'Klb.searchController.currentQueryString',
			  isEnabled:NO
			}),

			// GENDER
			genderLabel: SC.LabelView.design({
			  layout: { left: 5, top: 65, right:5, height: 22 },
			  value: "_Borrowers".loc(),  //"_Gender".loc(),
			  controlSize: SC.LARGE_CONTROL_SIZE,
			  classNames: 'filter-subheader'
			}),
			// note: for now, female checkbox acts as box for individuals. temp fix until borrower gender can be determined...
			femaleCheckbox: SC.CheckboxView.design({
			  layout: { left: 10, top: 90, width: 80, height: 24 },
			  title: "_Individuals".loc(), //"_Female".loc(),
			  valueBinding: 'Klb.searchController.showFemale'
			}),
			maleCheckbox: SC.CheckboxView.design({
			  layout: { left:100, top: 90, width: 80, height: 24 },
			  title: "_Male".loc(),
			  valueBinding: 'Klb.searchController.showMale'
			}),
			groupCheckbox: SC.CheckboxView.design({
			  layout: { left:190, top: 90, width: 80, height: 24 },
			  title: "_Groups".loc(),
			  valueBinding: 'Klb.searchController.showGroups'
			}),
/*
			// PARTNER RATING
			partnerLabel: SC.LabelView.design({
			  layout: { left: 5, top: 65+(50*1), right:5, height: 22 },
			  value: "_Partner_Rating".loc(),
			  fontWeight: SC.BOLD_WEIGHT,
			  controlSize: SC.LARGE_CONTROL_SIZE,
			  classNames: 'filter-subheader'
			}),
			partnerSlider: SC.SliderView.design({
			  layout: { left: 10, top: 90+(50*1), width: 200, height: 24 },
			  minimum: 0,
			  maximum: 5.0,
			  step: 0.1,
			  valueBinding: 'Klb.searchController.activeSearch.partnerRating'
			}),
			partnerContent: SC.LabelView.design({
			  layout: { right: 10, top: 90+(50*1), width: 30, height: 24 },
			  valueBinding: 'Klb.searchController.activeSearch.partnerRating'
			}),

			// GROUP SIZE
			borrowerLabel: SC.LabelView.design({
			  layout: { left: 5, top: 65+(50*2), right:5, height: 22 },
			  value: "_Borrowers".loc(),
			  fontWeight: SC.BOLD_WEIGHT,
			  controlSize: SC.LARGE_CONTROL_SIZE,
			  classNames: 'filter-subheader'
			}),
			borrowerSlider: SC.SliderView.design({
			  layout: { left: 10, top: 90+(50*2), width: 200, height: 24 },
				minimum: 1,
				maximum: 20,
				step: 1.0,
			  valueBinding: 'Klb.searchController.activeSearch.borrowerCount'
			}),
			borrowerContent: SC.LabelView.design({
			  layout: { right: 10, top: 90+(50*2), width: 30, height: 24 },
			  valueBinding: 'Klb.searchController.activeSearch.borrowerCount'
			}),
*/
			// LOCATION
			locationLabel: SC.LabelView.design({
			  layout: { left: 5, top: 65+(50*1), right:5, height: 22 },
			  value: "_Countries".loc(),
			  controlSize: SC.LARGE_CONTROL_SIZE,
			  classNames: 'filter-subheader'
			}),
			locationContent: SC.LabelView.design({
			  layout: { left: 10, top: 90+(50*1), width: 200, height: 24 },
			  valueBinding: 'Klb.searchController.formattedCountries'
//					needsEllipsis: YES 			  - ideally, added to SC
			}),
			locationButton: SC.ButtonView.design({
			  layout: { right:10, top: 90+(50*1), width: 65, height: 18 },
			  title: "_Edit".loc(),
        action: "showCountryPicker",
        target: "Klb.searchController",
        classNames: 'picker-button',
				controlSize: SC.SMALL_CONTROL_SIZE,
				titleMinWidth: 40
			}),

			// SECTOR
			sectorLabel: SC.LabelView.design({
			  layout: { left: 5, top: 65+(50*2), right:5, height: 22 },
			  value: "_Sectors".loc(),
			  controlSize: SC.LARGE_CONTROL_SIZE,
			  classNames: 'filter-subheader'
			}),
			sectorContent: SC.LabelView.design({
			  layout: { left: 10, top: 90+(50*2), width: 200, height: 24 },
			  valueBinding: 'Klb.searchController.formattedSectors'
//					needsEllipsis: YES 			  - ideally, added to SC
			}),
			sectorButton: SC.ButtonView.design({
			  layout: { right:10, top: 90+(50*2), width: 65, height: 18 },
			  title: "_Edit".loc(),
		        action: "showSectorPicker",
		        target: "Klb.searchController",
		        classNames: 'picker-button',
				controlSize: SC.SMALL_CONTROL_SIZE,
				titleMinWidth: 40
			}),

			// SAVE, etc.
			resetButton: SC.ButtonView.design({
			  layout: { centerX: -50, bottom: 10, width: 90, height: 24 },
			  title: "_Reset".loc()
			}),
			saveButton: SC.ButtonView.design({
			  layout: { centerX: 50, bottom: 10, width: 90, height: 24 },
			  title: "_Save".loc()
			})
     })
  }),
  
  resultsView: SC.SceneView.design({
    layout: { top: 0, bottom: 0, left: 301, right: 0 },
    scenes: "searchListView loanDetail".w(),
    nowShowingBinding: "Klb.lendingController.currentScene"
  })
}),
	
loansLoading: SC.View.design({
  layout: { top: 0, bottom: 0, left: 0, right: 0 },
  childViews: "loadingLabelView".w(),
  backgroundColor: 'white',

  loadingLabelView: SC.LabelView.design({
    layout: { left:0, right:0, centerY: 0, height: 24 },
    textAlign: SC.ALIGN_CENTER,
    classNames: "center-label",
    controlSize: SC.LARGE_CONTROL_SIZE,
    fontWeight: SC.BOLD_WEIGHT,
    value: "_Finding Available Loans".loc()
  })
}),

noTargets: SC.View.design({
  layout: { top: 0, bottom: 0, left: 0, right: 0 },
  childViews: "labelView sublabelView".w(),
  backgroundColor: 'white',

  labelView: SC.LabelView.design({
    layout: { left:0,right:0,centerY: -24, height: 24},
    backgroundColor: 'white',
    textAlign: SC.ALIGN_CENTER,
    classNames: "center-label",
    controlSize: SC.LARGE_CONTROL_SIZE,
    fontWeight: SC.BOLD_WEIGHT,
    value: "_No Loans Matched Your Criteria".loc()    
  }),
	sublabelView: SC.LabelView.design({
	  layout: { centerX: 0, centerY: 0, height: 24, width: 400 },
	  textAlign: SC.ALIGN_CENTER,
	  value: "_Please choose another filter or change your filter options.".loc()    
	})
}),

loanDetail: SC.View.design({
  childViews: "navigationView detailView".w(),

  navigationView: SC.ToolbarView.design({
    classNames: 'navigation-bar',
    
    layout: { top: 0, left: 0, right: 0, height: 30 },
    childViews: "backButton".w(),
    
    backButton: SC.ButtonView.design({
      layout: { top: 5, left: 8, width: 80, height: 24 },
      title: "« Back",
      action: "back"
    })
  }),
  
  detailView: SC.View.design({
     layout: { top: 31, left: 0, right: 0, bottom: 0 },
    childViews: "name picture posted statusLabel status loanAmountLabel loanAmount fundedAmountLabel fundedAmount borrowerCountLabel borrowerCount activityLabel activity sectorLabel sectorLabel sector useLabel use loanLabel loan countryLabel country partnerLabel partner".w(),
    
    name: SC.LabelView.design({
      layout: { top: 10, left: 10, width: 230, height: 20 },
      valueBinding: "Klb.detailController.name",
      controlSize: SC.LARGE_CONTROL_SIZE,
			fontWeight: SC.BOLD_WEIGHT
    }),
    posted: SC.LabelView.design({
      layout: { top: 10, left: 250, width: 150, height: 20 },
      valueBinding: "Klb.detailController.posted_date"
    }),
    picture: SC.ImageView.design({
      layout: { top: 35, left: 10, width: 450, height: 360 },
      valueBinding: "Klb.detailController.largeImage"
    }),
    statusLabel: SC.LabelView.design({
      layout: { top: 35, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Status:"
    }),
    status: SC.LabelView.design({
      layout: { top: 35, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.status"
    }),
    loanAmountLabel: SC.LabelView.design({
      layout: { top: 60, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Loan Amount:"
    }),
    loanAmount: SC.LabelView.design({
      layout: { top: 60, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.loan_amount"
    }),
    fundedAmountLabel: SC.LabelView.design({
      layout: { top: 85, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Funded Amount:"
    }),
    fundedAmount: SC.LabelView.design({
      layout: { top: 85, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.funded_amount"
    }),
    borrowerCountLabel: SC.LabelView.design({
      layout: { top: 110, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Borrowers:"
    }),
    borrowerCount: SC.LabelView.design({
      layout: { top: 110, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.borrower_count"
    }),
   
    activityLabel: SC.LabelView.design({
      layout: { top: 135, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Activity:"
    }),
    activity: SC.LabelView.design({
      layout: { top: 135, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.activity"
    }),
    sectorLabel: SC.LabelView.design({
      layout: { top: 160, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Sector:"
    }),
    sector: SC.LabelView.design({
      layout: { top: 160, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.sector"
    }),
    useLabel: SC.LabelView.design({
      layout: { top: 185, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Use:"
    }),
    use: SC.LabelView.design({
      layout: { top: 185, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.use"
    }),
    loanLabel: SC.LabelView.design({
      layout: { top: 210, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Loan:"
    }),
    loan: SC.LabelView.design({
      layout: { top: 210, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.loan"
    }),
    countryLabel: SC.LabelView.design({
      layout: { top: 235, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Country"
    }),
    
    country: SC.LabelView.design({
      layout: { top: 235, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.country"
    }),
    partnerLabel: SC.LabelView.design({
      layout: { top: 260, left: 470, width: 120, height: 20 },
      fontWeight: SC.BOLD_WEIGHT,
      value: "Partner:"
    }),
    partner: SC.LabelView.design({
      layout: { top: 260, left: 600, width: 120, height: 20 },
      valueBinding: "Klb.detailController.partner_id"
    })
    
  })
}),
  
searchListView: SC.View.design({
  layout: { top: 0, bottom: 0, left: 0, right: 0 },
  childViews: 'loanView loanViewBar'.w(),
  
  loanView: Klb.ScrollView.design({
    hasHorizontalScroller: NO,
    layout: { top: 0, bottom: 41, left: 0, right: 0 },
    classNames: 'no-border',
    backgroundColor: 'white',

		contentView: SC.ListView.design({
			classNames: 'loanListView',
		  contentBinding: 'Klb.loansController.arrangedObjects',
//			  selectionBinding: 'Klb.loansController.selection',
     		selectionDelegate: Klb.loansController,
			contentValueKey: "name",
			exampleView: Klb.LoanListingView,
			rowHeight: 120,
			actOnSelect: YES,
      		action: "selectLoan"
		})
  }),
  
  loanViewBar: SC.View.design({
    layout: { bottom: 0, left: 0, right: 0, height: 40 },
		childViews: 'resultsLabel sortLabel sortSelectView'.w(),
		classNames: 'klb-chrome lendingLoanListBar'.w(),
		layerId:'id-lendingLoanListBar',

		resultsLabel: SC.LabelView.design({
			valueBinding: 'Klb.loansController.lengthNamedForDisplay',
		  layout: { left: 10, top: 10, width: 180, height: 24 },
		  controlSize: SC.REGULAR_CONTROL_SIZE,
			fontWeight: SC.BOLD_WEIGHT
		}),

		sortLabel: SC.LabelView.design({
		  layout: { right: 140, top: 9, width: 80, height: 24 },
		  textAlign: SC.ALIGN_RIGHT,
		  value: "_Sort_by".loc()
		}),

		sortSelectView: SC.SelectFieldView.design({
		  layout: { right: 5, top: 10, width: 130, height: 24 },
		  nameKey: 'name',
		  valueKey: 'value',
		  objects: Klb.searchController.get('sortOptions'),
		  valueBinding: 'Klb.searchController.currentSortOrder',
		  disableSort: true
		}),

		viewModeSegmentedView: SC.SegmentedView.design({
		  layout: { right: 5, top: 5, width: 100, height: 24 },
		   items: "_List_Grid".loc().w(), // these not to be localized - use icons
        value: "_List".loc()
		})
  })
 })
});
