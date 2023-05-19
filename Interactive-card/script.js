var nCard = $("#nCard")
var name = $("#name")
var dtValid = $("#mm")
var cvc = $("#inputCVC")

nCard.mask('0000 0000 0000 0000')
$(".nCard").mask('0000 0000 0000 0000')

function AtualizaInfos() {
    var nCard = $("#nCard").val();
    var name = $("#name").val();
    var dtValid = $("#mm").val() + "/" + $("#yy").val();
    var cvc = $("#inputCVC").val();

    $(".nCard").text(nCard);
    $(".name").text(name);
    if (dtValid == "/") {
        $(".validDate").text("")
    } else {
        $(".validDate").text(dtValid);
    }
    $(".CVC").text(cvc);
}