var budget, pages, animations, services, company, branding, client_name, email, advanced_seo, custom_functionalities, career_page, user_access, filtering_system, summary;

// Describe this function...
function Calculate_Budget() {
  budget = 0;
  if (pages == 1) {
    budget = (typeof budget == 'number' ? budget : 0) + 1000;
  } else if (pages == 2) {
    budget = (typeof budget == 'number' ? budget : 0) + 2000;
  } else if (pages == 3) {
    budget = (typeof budget == 'number' ? budget : 0) + 3000;
  }
  if (animations == 1) {
    budget = (typeof budget == 'number' ? budget : 0) + 0;
  } else if (animations == 2) {
    budget = (typeof budget == 'number' ? budget : 0) + 2000;
  } else if (animations == 3) {
    budget = (typeof budget == 'number' ? budget : 0) + 4000;
  }
  if (services == 1) {
    budget = (typeof budget == 'number' ? budget : 0) + 0;
  } else if (services == 2) {
    budget = (typeof budget == 'number' ? budget : 0) + budget;
  } else if (services == 3) {
    budget = (typeof budget == 'number' ? budget : 0) + budget * 2;
  }
  if (advanced_seo == true) {
    budget = (typeof budget == 'number' ? budget : 0) + 2000;
  }
  if (career_page == true) {
    budget = (typeof budget == 'number' ? budget : 0) + 1000;
  }
  if (user_access == true) {
    budget = (typeof budget == 'number' ? budget : 0) + 4000;
  }
  if (filtering_system == true) {
    budget = (typeof budget == 'number' ? budget : 0) + 2000;
  }
  $('[bloc=budget]').text(budget);
}

// Describe this function...
function Multi_Step_Check_Name_and_Email() {
  Calculate_Budget();
  if (client_name != null && email != null) {

        nextTab = 'company';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=company]')).attr('prev-tab',we_activeTab);

        }
}


var we_tabs_next_button = '[bloc=next-question]';
    var we_tabs_prev_button = '[bloc=prev-question]';
    var we_tabs_active_class = 'active';

    var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

    var tabList = ['pages'];

    openTab(tabList[0]);

    $(we_tabs_next_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfNextTab = indexOfActiveTab + 1;
      var nextTab = tabList[indexOfNextTab];
      var amountOfTabs = tabList.length;
      var attrNextTab = $('.w--tab-active').attr('next-tab');

      openTab(attrNextTab);

      attrNextTab = $('.w--tab-active').attr('next-tab');

      if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
      }

      if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    $(we_tabs_prev_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfPrevTab = indexOfActiveTab - 1;
      var prevTab = tabList[indexOfPrevTab];

      var attrPrevTab = $('.w--tab-active').attr('prev-tab');

      if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      }

      if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
      } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    function openTab(tab) {
      var tab_link = "a[data-w-tab=" + tab;
      tab = "div[data-w-tab=" + tab;

      $(tab).siblings(".tab-panel").removeClass("w--tab-active");
      $(tab).addClass("w--tab-active");
      $(tab_link).siblings("a").removeClass("w--current");
      $(tab_link).addClass("w--current");
    }var value_string = varToString({ pages });
$('[name='+value_string+']').on('input',function() {pages = $(this).val(); if($(this).is(':checkbox')) { pages= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(pages)) { pages = parseFloat(pages); }   Calculate_Budget();

      nextTab = 'animations';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=animations]')).attr('prev-tab',we_activeTab);

      });$("label.w-radio").on("click", function () {if ($(this).children('[name=pages]').length != 0) {pages = $('[name='+value_string+']', this).val();
}
});var value_string = varToString({ animations });
$('[name='+value_string+']').on('input',function() {animations = $(this).val(); if($(this).is(':checkbox')) { animations= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(animations)) { animations = parseFloat(animations); }   Calculate_Budget();

      nextTab = 'services';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=services]')).attr('prev-tab',we_activeTab);

      });$("label.w-radio").on("click", function () {if ($(this).children('[name=animations]').length != 0) {animations = $('[name='+value_string+']', this).val();
}
var value_string = varToString({ animations });
$('[name='+value_string+']').on('input',function() {client_name = $(this).val(); if($(this).is(':checkbox')) { client_name= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(client_name)) { client_name = parseFloat(client_name); }   Multi_Step_Check_Name_and_Email();
});$("label.w-radio").on("click", function () {if ($(this).children('[name=client_name]').length != 0) {client_name = $('[name='+value_string+']', this).val();
}                                                   
});var value_string = varToString({ services });
$('[name='+value_string+']').on('input',function() {services = $(this).val(); if($(this).is(':checkbox')) { services= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(services)) { services = parseFloat(services); }   Calculate_Budget();
  if (services == 1) {

        nextTab = 'custom_functionalities';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=custom_functionalities]')).attr('prev-tab',we_activeTab);

        } else if (services == 2) {

        nextTab = 'branding';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=branding]')).attr('prev-tab',we_activeTab);

        }
});$("label.w-radio").on("click", function () {if ($(this).children('[name=services]').length != 0) {services = $('[name='+value_string+']', this).val();
}
});var value_string = varToString({ branding });
$('[name='+value_string+']').on('input',function() {branding = $(this).val(); if($(this).is(':checkbox')) { branding= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(branding)) { branding = parseFloat(branding); }   Calculate_Budget();

      nextTab = 'custom_functionalities';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=custom_functionalities]')).attr('prev-tab',we_activeTab);

      });$("label.w-radio").on("click", function () {if ($(this).children('[name=branding]').length != 0) {branding = $('[name='+value_string+']', this).val();
}
});$('[bloc=next-question]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='custom_functionalities') {

        nextTab = 'client_name';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=client_name]')).attr('prev-tab',we_activeTab);


      }});
var value_string = varToString({ client_name });
$('[name='+value_string+']').on('input',function() {client_name = $(this).val(); if($(this).is(':checkbox')) { client_name= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(client_name)) { client_name = parseFloat(client_name); }   Multi_Step_Check_Name_and_Email();
});$("label.w-radio").on("click", function () {if ($(this).children('[name=client_name]').length != 0) {client_name = $('[name='+value_string+']', this).val();
}
});var value_string = varToString({ email });
$('[name='+value_string+']').on('input',function() {email = $(this).val(); if($(this).is(':checkbox')) { email= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(email)) { email = parseFloat(email); }   Multi_Step_Check_Name_and_Email();
});$("label.w-radio").on("click", function () {if ($(this).children('[name=email]').length != 0) {email = $('[name='+value_string+']', this).val();
}
});var value_string = varToString({ company });
$('[name='+value_string+']').on('input',function() {company = $(this).val(); if($(this).is(':checkbox')) { company= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(company)) { company = parseFloat(company); }   Calculate_Budget();

      nextTab = 'summary';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=summary]')).attr('prev-tab',we_activeTab);

      });$("label.w-radio").on("click", function () {if ($(this).children('[name=company]').length != 0) {company = $('[name='+value_string+']', this).val();
}
});$('[bloc=next-question]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='summary') {
          $('[bloc=meeting-summary]').css({
      'display':'none',
    });

      }});
$('[bloc=prev-question]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='company') {
          $('[bloc=meeting-summary]').css({
      'display':'flex',
    });

      }});
