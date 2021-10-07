#:nocov:
module BootstrapAlertsHelper
  def bootstrap_alert_box
    content = []
    flash.each do |key, value|
      key = 'warning' if key == 'notice'
      key = 'danger' if key == 'alert'
      content << content_tag(:div, value, class: "alert alert-#{key} alert-dismissible mt-2", role: "alert")
    end
    raw content.join
  end
end
#:nocov:
