var budget, service, photo_choices, service, company, branding, client_name, email, advanced_seo, summary, career_page, user_access, filtering_system, summary;

// Describe this function...
function Calculate_Budget() {
  budget = 0;
//   if (service == 1) {
//     budget = (typeof budget == 'number' ? budget : 0) + 1000;
//   } else if (service == 2) {
//     budget = (typeof budget == 'number' ? budget : 0) + 2000;
//   } 
  
  if (photo_choices == 1) {
    budget = (typeof budget == 'number' ? budget : 0) + 0;
  } else if (photo_choices == 2) {
    budget = (typeof budget == 'number' ? budget : 0) + 2000;
  } else if (photo_choices == 3) {
    budget = (typeof budget == 'number' ? budget : 0) + 4000;
  }
  if (service == 1) {
    budget = (typeof budget == 'number' ? budget : 0) + 1000;
  } else if (service == 2) {
    budget = (typeof budget == 'number' ? budget : 0) + 2000;
  } else if (service == 3) {
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

    var tabList = ['service'];

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
    }var value_string = varToString({ service });
$('[name='+value_string+']').on('input',function() {service = $(this).val(); if($(this).is(':checkbox')) { service= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(service)) { service = parseFloat(service); }   Calculate_Budget();

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
      $($('[data-w-tab=photo_choices]')).attr('prev-tab',we_activeTab);

      });$("label.w-radio").on("click", function () {if ($(this).children('[name=service]').length != 0) {service = $('[name='+value_string+']', this).val();
}
});var value_string = varToString({ photo_choices });
$('[name='+value_string+']').on('input',function() {photo_choices = $(this).val(); if($(this).is(':checkbox')) { photo_choices= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(photo_choices)) { photo_choices = parseFloat(photo_choices); }   Calculate_Budget();

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

      });$("label.w-radio").on("click", function () {if ($(this).children('[name=photo_choices]').length != 0) {photo_choices = $('[name='+value_string+']', this).val();
}
});var value_string = varToString({ client_name });
$('[name='+value_string+']').on('input',function() {client_name = $(this).val(); if($(this).is(':checkbox')) { client_name= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(client_name)) { client_name = parseFloat(client_name); }   Calculate_Budget();
  if (client_name == 1) {

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

        } else if (client_name == 2) {

        nextTab = 'photo_choices';
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
});$("label.w-radio").on("click", function () {if ($(this).children('[name=client_name]').length != 0) {client_name = $('[name='+value_string+']', this).val();
}
});var value_string = varToString({ branding });
$('[name='+value_string+']').on('input',function() {branding = $(this).val(); if($(this).is(':checkbox')) { branding= !$(this).siblings('.w-checkbox-input').hasClass('w--redirected-checked'); }if($.isNumeric(branding)) { branding = parseFloat(branding); }   Calculate_Budget();

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

      });$("label.w-radio").on("click", function () {if ($(this).children('[name=branding]').length != 0) {branding = $('[name='+value_string+']', this).val();
}
});$('[bloc=next-question]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='summary') {

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


