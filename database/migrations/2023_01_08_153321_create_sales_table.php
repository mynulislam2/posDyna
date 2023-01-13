<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->integer('referenceNo');
            $table->string('biller',50);
            $table->string('customer',50);
            $table->string('orderTax',50);
            $table->string('discountType')->nullable();
            $table->float('orderDiscount')->nullable();
            $table->integer('shippingCharge')->nullable();
            $table->string('shippingAddress')->nullable();
            $table->string('document')->nullable();
            $table->string('saleStatus',50);
            $table->string('paymentStatus',50);
            $table->string('saleNote')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
};
